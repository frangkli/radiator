"use client";

import { BubbleMenu, EditorProvider, FloatingMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];
const content = "<p>Hello World</p>";

export function TipTapProvider() {
	return (
		<EditorProvider
			extensions={extensions}
			content={content}
			autofocus
			editorProps={{
				attributes: {
					class: "min-h-full min-w-full outline-none",
				},
			}}
		>
			<FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
			<BubbleMenu editor={null}>This is the bubble menu</BubbleMenu>
		</EditorProvider>
	);
}
