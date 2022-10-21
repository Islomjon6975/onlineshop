import React from 'react'
import { Button } from '../../Generic/Button'
import { Container } from './style'
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

export const AddNew = () => {
    const props: UploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
  return (
    <Container>
        <Container.Title>Add Plant</Container.Title>
        <Container.Wrapper>
            <Container.Label>
                Name of plant
                <Container.Input type='text' />
            </Container.Label>
            <Container.Label>
                Type
                <Container.Input type='text' />
            </Container.Label>
        </Container.Wrapper>
        <Container.Wrapper>
            <Container.Label>
                Category
                <Container.Input type='text' />
            </Container.Label>
            <Container.Label>
                Tags
                <Container.Input type='text' />
            </Container.Label>
        </Container.Wrapper>
        <Container.Descs>
            <Container.Label>
                Name of plant
                <Container.Textarea></Container.Textarea>
            </Container.Label>
        </Container.Descs>
        <Container.Descs>
            <Container.Label>
                Description
                <Container.Textarea height='93px'></Container.Textarea>
            </Container.Label>
        </Container.Descs>
        <Container.ImageWrapper>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
        </Container.ImageWrapper>
        <Button width='131px'>Save Change</Button>
    </Container>
  )
}
