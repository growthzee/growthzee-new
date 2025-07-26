"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Youtube from "@tiptap/extension-youtube";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  LinkIcon,
  ImageIcon,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  UnderlineIcon,
  Highlighter,
  Palette,
  TableIcon,
  YoutubeIcon,
  Code2,
  Eye,
} from "lucide-react";
import { useEffect, useState } from "react";

interface AdvancedTiptapEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  name?: string;
}

export function AdvancedTiptapEditor({
  value = "",
  onChange,

  name,
}: AdvancedTiptapEditorProps) {
  const [content, setContent] = useState(value);
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");
  const [isEditorReady, setIsEditorReady] = useState(false);

  const editor = useEditor({
    immediatelyRender: false, // Fix SSR hydration issue
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-purple-600 underline hover:text-purple-700",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg my-4",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      Youtube.configure({
        controls: false,
        nocookie: true,
      }),
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
      setHtmlContent(html);
      onChange?.(html);
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-lg max-w-none focus:outline-none min-h-[400px] p-4 text-gray-900 leading-relaxed",
      },
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
      setHtmlContent(value);
    }
    if (editor && !isEditorReady) {
      setIsEditorReady(true);
    }
  }, [value, editor, isEditorReady]);

  const handleHtmlChange = (html: string) => {
    setHtmlContent(html);
    if (editor) {
      editor.commands.setContent(html);
    }
    onChange?.(html);
  };

  if (!editor || !isEditorReady) {
    return (
      <div className="border border-gray-300 rounded-lg bg-white p-4">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  const addImage = () => {
    const url = window.prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addYoutube = () => {
    const url = window.prompt("Enter YouTube URL:");
    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        width: 640,
        height: 480,
      });
    }
  };

  const insertTable = () => {
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  };

  const colors = [
    "#000000",
    "#374151",
    "#6b7280",
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
    "#06b6d4",
    "#3b82f6",
    "#8b5cf6",
    "#ec4899",
    "#f43f5e",
  ];

  const highlightColors = [
    "#fef3c7",
    "#fecaca",
    "#fed7d7",
    "#fde68a",
    "#d1fae5",
    "#bfdbfe",
    "#e0e7ff",
    "#f3e8ff",
    "#fce7f3",
  ];

  return (
    <div className="advanced-tiptap-editor">
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={content} />

      <div className="border border-gray-300 rounded-lg bg-white overflow-hidden">
        {/* Mode Toggle */}
        <div className="border-b border-gray-200 p-2 bg-gray-50">
          <Tabs
            value={isHtmlMode ? "html" : "visual"}
            onValueChange={(value) => setIsHtmlMode(value === "html")}
          >
            <TabsList className="grid w-fit grid-cols-2">
              <TabsTrigger value="visual" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Visual
              </TabsTrigger>
              <TabsTrigger value="html" className="flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                HTML
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {!isHtmlMode ? (
          <>
            {/* Toolbar */}
            <div className="border-b border-gray-200 p-2 flex flex-wrap gap-1 bg-gray-50">
              {/* History */}
              <div className="flex gap-1 border-r border-gray-200 pr-2 mr-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => editor.chain().focus().undo().run()}
                  disabled={!editor.can().undo()}
                  className="h-8 w-8 p-0"
                  title="Undo"
                >
                  <Undo className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => editor.chain().focus().redo().run()}
                  disabled={!editor.can().redo()}
                  className="h-8 w-8 p-0"
                  title="Redo"
                >
                  <Redo className="h-4 w-4" />
                </Button>
              </div>

              {/* Text Formatting */}
              <div className="flex gap-1 border-r border-gray-200 pr-2 mr-2">
                <Button
                  type="button"
                  variant={editor.isActive("bold") ? "default" : "ghost"}
                  size="sm"
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  className="h-8 w-8 p-0"
                  title="Bold"
                >
                  <Bold className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={editor.isActive("italic") ? "default" : "ghost"}
                  size="sm"
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  className="h-8 w-8 p-0"
                  title="Italic"
                >
                  <Italic className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={editor.isActive("underline") ? "default" : "ghost"}
                  size="sm"
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                  className="h-8 w-8 p-0"
                  title="Underline"
                >
                  <UnderlineIcon className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={editor.isActive("strike") ? "default" : "ghost"}
                  size="sm"
                  onClick={() => editor.chain().focus().toggleStrike().run()}
                  className="h-8 w-8 p-0"
                  title="Strikethrough"
                >
                  <Strikethrough className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={editor.isActive("code") ? "default" : "ghost"}
                  size="sm"
                  onClick={() => editor.chain().focus().toggleCode().run()}
                  className="h-8 w-8 p-0"
                  title="Inline Code"
                >
                  <Code className="h-4 w-4" />
                </Button>
              </div>

              {/* Text Color */}
              <div className="flex gap-1 border-r border-gray-200 pr-2 mr-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Text Color"
                    >
                      <Palette className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64">
                    <div className="grid grid-cols-6 gap-2">
                      {colors.map((color) => (
                        <button
                          key={color}
                          type="button"
                          className="w-8 h-8 rounded border border-gray-300 hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                          onClick={() =>
                            editor.chain().focus().setColor(color).run()
                          }
                          title={color}
                        />
                      ))}
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="w-full mt-2 bg-transparent"
                      onClick={() => editor.chain().focus().unsetColor().run()}
                    >
                      Remove Color
                    </Button>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Highlight"
                    >
                      <Highlighter className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64">
                    <div className="grid grid-cols-3 gap-2">
                      {highlightColors.map((color) => (
                        <button
                          key={color}
                          type="button"
                          className="w-8 h-8 rounded border border-gray-300 hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                          onClick={() =>
                            editor
                              .chain()
                              .focus()
                              .toggleHighlight({ color })
                              .run()
                          }
                          title={color}
                        />
                      ))}
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="w-full mt-2 bg-transparent"
                      onClick={() =>
                        editor.chain().focus().unsetHighlight().run()
                      }
                    >
                      Remove Highlight
                    </Button>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Headings */}
              <div className="flex gap-1 border-r border-gray-200 pr-2 mr-2">
                <Button
                  type="button"
                  variant={
                    editor.isActive("heading", { level: 1 })
                      ? "default"
                      : "ghost"
                  }
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                  }
                  className="h-8 w-8 p-0"
                  title="Heading 1"
                >
                  <Heading1 className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={
                    editor.isActive("heading", { level: 2 })
                      ? "default"
                      : "ghost"
                  }
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                  className="h-8 w-8 p-0"
                  title="Heading 2"
                >
                  <Heading2 className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={
                    editor.isActive("heading", { level: 3 })
                      ? "default"
                      : "ghost"
                  }
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                  }
                  className="h-8 w-8 p-0"
                  title="Heading 3"
                >
                  <Heading3 className="h-4 w-4" />
                </Button>
              </div>

              {/* Text Alignment */}
              <div className="flex gap-1 border-r border-gray-200 pr-2 mr-2">
                <Button
                  type="button"
                  variant={
                    editor.isActive({ textAlign: "left" }) ? "default" : "ghost"
                  }
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().setTextAlign("left").run()
                  }
                  className="h-8 w-8 p-0"
                  title="Align Left"
                >
                  <AlignLeft className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={
                    editor.isActive({ textAlign: "center" })
                      ? "default"
                      : "ghost"
                  }
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().setTextAlign("center").run()
                  }
                  className="h-8 w-8 p-0"
                  title="Align Center"
                >
                  <AlignCenter className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={
                    editor.isActive({ textAlign: "right" })
                      ? "default"
                      : "ghost"
                  }
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().setTextAlign("right").run()
                  }
                  className="h-8 w-8 p-0"
                  title="Align Right"
                >
                  <AlignRight className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={
                    editor.isActive({ textAlign: "justify" })
                      ? "default"
                      : "ghost"
                  }
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().setTextAlign("justify").run()
                  }
                  className="h-8 w-8 p-0"
                  title="Justify"
                >
                  <AlignJustify className="h-4 w-4" />
                </Button>
              </div>

              {/* Lists */}
              <div className="flex gap-1 border-r border-gray-200 pr-2 mr-2">
                <Button
                  type="button"
                  variant={editor.isActive("bulletList") ? "default" : "ghost"}
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                  className="h-8 w-8 p-0"
                  title="Bullet List"
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={editor.isActive("orderedList") ? "default" : "ghost"}
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().toggleOrderedList().run()
                  }
                  className="h-8 w-8 p-0"
                  title="Numbered List"
                >
                  <ListOrdered className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={editor.isActive("blockquote") ? "default" : "ghost"}
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().toggleBlockquote().run()
                  }
                  className="h-8 w-8 p-0"
                  title="Quote"
                >
                  <Quote className="h-4 w-4" />
                </Button>
              </div>

              {/* Media & Links */}
              <div className="flex gap-1 border-r border-gray-200 pr-2 mr-2">
                <Button
                  type="button"
                  variant={editor.isActive("link") ? "default" : "ghost"}
                  size="sm"
                  onClick={addLink}
                  className="h-8 w-8 p-0"
                  title="Add Link"
                >
                  <LinkIcon className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={addImage}
                  className="h-8 w-8 p-0"
                  title="Add Image"
                >
                  <ImageIcon className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={addYoutube}
                  className="h-8 w-8 p-0"
                  title="Add YouTube Video"
                >
                  <YoutubeIcon className="h-4 w-4" />
                </Button>
              </div>

              {/* Table */}
              <div className="flex gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={insertTable}
                  className="h-8 w-8 p-0"
                  title="Insert Table"
                >
                  <TableIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Table Controls (show when table is selected) */}
            {editor.isActive("table") && (
              <div className="border-b border-gray-200 p-2 bg-blue-50 flex gap-2 flex-wrap">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => editor.chain().focus().addColumnBefore().run()}
                >
                  Add Column Before
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => editor.chain().focus().addColumnAfter().run()}
                >
                  Add Column After
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => editor.chain().focus().deleteColumn().run()}
                >
                  Delete Column
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => editor.chain().focus().addRowBefore().run()}
                >
                  Add Row Before
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => editor.chain().focus().addRowAfter().run()}
                >
                  Add Row After
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => editor.chain().focus().deleteRow().run()}
                >
                  Delete Row
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => editor.chain().focus().deleteTable().run()}
                >
                  Delete Table
                </Button>
              </div>
            )}

            {/* Editor */}
            <EditorContent editor={editor} className="min-h-[400px] bg-white" />
          </>
        ) : (
          /* HTML Mode */
          <div className="p-4">
            <Textarea
              value={htmlContent}
              onChange={(e) => handleHtmlChange(e.target.value)}
              className="min-h-[400px] font-mono text-sm bg-gray-900 text-green-400 border-gray-600"
              placeholder="Edit HTML directly..."
            />
          </div>
        )}
      </div>

      <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
        <span>Advanced rich text editor with HTML mode</span>
        <span>
          {editor.storage.characterCount?.characters() || 0} characters
        </span>
      </div>

      <style jsx global>{`
        .advanced-tiptap-editor .ProseMirror {
          outline: none;
        }

        .advanced-tiptap-editor
          .ProseMirror
          p.is-editor-empty:first-child::before {
          color: #9ca3af;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }

        .advanced-tiptap-editor .ProseMirror h1 {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: #1f2937;
        }

        .advanced-tiptap-editor .ProseMirror h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          color: #1f2937;
        }

        .advanced-tiptap-editor .ProseMirror h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: #1f2937;
        }

        .advanced-tiptap-editor .ProseMirror blockquote {
          border-left: 4px solid #7c3aed;
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
          color: #6b7280;
        }

        .advanced-tiptap-editor .ProseMirror code {
          background: #f3f4f6;
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          font-size: 0.9em;
          font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
        }

        .advanced-tiptap-editor .ProseMirror pre {
          background: #1f2937;
          color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }

        .advanced-tiptap-editor .ProseMirror pre code {
          background: none;
          color: inherit;
          padding: 0;
        }

        .advanced-tiptap-editor .ProseMirror img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }

        .advanced-tiptap-editor .ProseMirror ul,
        .advanced-tiptap-editor .ProseMirror ol {
          padding-left: 1.5rem;
          margin: 1rem 0;
        }

        .advanced-tiptap-editor .ProseMirror li {
          margin: 0.25rem 0;
        }

        .advanced-tiptap-editor .ProseMirror table {
          border-collapse: collapse;
          margin: 1rem 0;
          overflow: hidden;
          table-layout: fixed;
          width: 100%;
        }

        .advanced-tiptap-editor .ProseMirror table td,
        .advanced-tiptap-editor .ProseMirror table th {
          border: 2px solid #e5e7eb;
          box-sizing: border-box;
          min-width: 1em;
          padding: 6px 8px;
          position: relative;
          vertical-align: top;
        }

        .advanced-tiptap-editor .ProseMirror table th {
          background-color: #f9fafb;
          font-weight: bold;
          text-align: left;
        }

        .advanced-tiptap-editor .ProseMirror table .selectedCell:after {
          background: rgba(124, 58, 237, 0.1);
          content: "";
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          pointer-events: none;
          position: absolute;
          z-index: 2;
        }

        .advanced-tiptap-editor .ProseMirror .tableWrapper {
          overflow-x: auto;
        }

        .advanced-tiptap-editor .ProseMirror .resize-cursor {
          cursor: ew-resize;
          cursor: col-resize;
        }

        .advanced-tiptap-editor .ProseMirror iframe {
          border-radius: 0.5rem;
          margin: 1rem 0;
        }
      `}</style>
    </div>
  );
}
