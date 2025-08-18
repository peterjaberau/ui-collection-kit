'use client'

import { Avatar, Button, FileUpload, useEnvironmentContext } from '@chakra-ui/react'
import { useState } from 'react'

interface PhotoUploadProps extends FileUpload.RootProps {
  src?: string
}

export const PhotoUpload = (props: PhotoUploadProps) => {
  const { src: srcProp, ...rest } = props
  const [src, setSrc] = useState<string | undefined>(srcProp)
  const env = useEnvironmentContext()
  return (
    <FileUpload.Root
      accept="image/*"
      maxFileSize={3145728}
      flexDirection="row"
      alignItems="center"
      onFileChange={(e) => {
        const win = env.getWindow()
        const reader = new win.FileReader()
        reader.onload = () => setSrc(reader.result as string)
        reader.readAsDataURL(e.acceptedFiles[0])
      }}
      {...rest}
    >
      <FileUpload.HiddenInput />
      <Avatar.Root size="xl">
        <Avatar.Fallback />
        <Avatar.Image src={src} />
      </Avatar.Root>
      <FileUpload.Trigger asChild>
        <Button size="sm" variant="subtle" colorPalette="gray">
          Upload photo
        </Button>
      </FileUpload.Trigger>
    </FileUpload.Root>
  )
}
