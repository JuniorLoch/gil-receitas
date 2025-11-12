'use client'

import dynamic from 'next/dynamic'
import { forwardRef } from 'react'
import { type MDXEditorMethods, type MDXEditorProps } from '@mdxeditor/editor'

// OBS - This is the only place InitializedMDXEditor is imported directly.
const Editor = dynamic(() => import('./InitializedTextEditor'), {
  ssr: false,
})

// DOC - This is what is imported by other components. Pre-initialized with plugins, and ready
// to accept other props, including a ref.
export const FormTextEditor = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => (
  <Editor {...props} editorRef={ref} />
))

// OBS - TS complains without the following line
FormTextEditor.displayName = 'FormTextEditor'
