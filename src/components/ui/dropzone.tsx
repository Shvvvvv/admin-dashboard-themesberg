import { useDropzone, type FileWithPath } from "react-dropzone"
import { cn } from "@/lib/utils"

type DropzoneProps = {
  onDrop: (files: FileWithPath[]) => void
  accept?: Record<string, string[]>
  maxSize?: number
  multiple?: boolean
}

export function Dropzone({
  onDrop,
  accept,
  maxSize = 2 * 1024 * 1024,
  multiple = false
}: DropzoneProps) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections
  } = useDropzone({
    onDrop,
    accept,
    maxSize,
    multiple
  })

  return (
    <div
      {...getRootProps()}
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed p-6 text-center transition",
        isDragActive && "border-primary bg-muted",
        isDragReject && "border-destructive bg-destructive/10"
      )}
    >
      <input {...getInputProps()} />

      <p className="text-sm text-muted-foreground">
        {isDragActive
          ? "Lepasin filenya sekarang"
          : "Drag & drop file di sini, atau klik"}
      </p>

      {fileRejections.length > 0 && (
        <p className="mt-2 text-xs text-destructive">
          File ditolak (format atau ukuran tidak valid)
        </p>
      )}
    </div>
  )
}
