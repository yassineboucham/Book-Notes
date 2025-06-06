import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

export default function BlockNoteEditorComponent() {
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Welcome to the BlockNote editor! Start typing here..."
      }
    ]
  });

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <BlockNoteView editor={editor} />
    </div>
  );
}
 