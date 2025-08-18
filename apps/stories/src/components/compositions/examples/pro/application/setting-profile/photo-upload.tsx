'use client'

import { Avatar, Button, FileUpload, Stack, Text, useEnvironmentContext } from '@chakra-ui/react'
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
      alignItems="flex-end"
      onFileChange={(e) => {
        const win = env.getWindow()
        const reader = new win.FileReader()
        reader.onload = () => setSrc(reader.result as string)
        reader.readAsDataURL(e.acceptedFiles[0])
      }}
      {...rest}
    >
      <FileUpload.HiddenInput />
      <Avatar.Root size="2xl">
        <Avatar.Fallback />
        <Avatar.Image src={src} />
      </Avatar.Root>
      <Stack>
        <FileUpload.Trigger asChild>
          <Button size="xs" variant="subtle" colorPalette="gray">
            Upload photo
          </Button>
        </FileUpload.Trigger>
        <Text color="fg.muted" textStyle="sm">
          Pick a photo up to 3MB
        </Text>
      </Stack>
    </FileUpload.Root>
  )
}
