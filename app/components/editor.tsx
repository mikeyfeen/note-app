'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import StarterKit from '@tiptap/starter-kit'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Highlight from "@tiptap/extension-highlight";
import Underline from '@tiptap/extension-underline'
import Link from "@tiptap/extension-link";
import Heading from "@tiptap/extension-heading";
import History from "@tiptap/extension-history";


const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  })

  const toggleBold = () => {
    if (editor) {
      editor.chain().focus().toggleBold().run()
    }
  }
  const toggleItalic = () => {  
    if (editor) {
      editor.chain().focus().toggleItalic().run()
    }
  }
  const toggleUnderline = () => {
    if (editor) {
      editor.chain().focus().toggleUnderline().run()
    }
  }
  const toggleHighlight = () => {
    if (editor) {
      editor.chain().focus().toggleHighlight().run()
    }
  }
  const setLink = () => {
    if (editor) {
      const url = window.prompt('URL')
      if (url) {
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
      }
    }
  }
  const unsetLink = () => {
    if (editor) {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
    }
  }

  return <EditorContent editor={editor} />
}

export default Tiptap
