import React, { useState } from 'react'
import { Button } from '../../Generic/Button'
import { Container } from './style'
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../../context/Products';

export const Update = () => {
    // const props = {
    //     name: 'file',
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     headers: {
    //       authorization: 'authorization-text',
    //     },
    //     onChange(info) {
    //       if (info.file.status !== 'uploading') {
    //         console.log(info.file, info.fileList);
    //       }
    //       if (info.file.status === 'done') {
    //         message.success(`${info.file.name} file uploaded successfully`);
    //       } else if (info.file.status === 'error') {
    //         message.error(`${info.file.name} file upload failed.`);
    //       }
    //     },
    //   };

      const param = useParams()
      const [state, dispatch] = useProducts()
      const selectedProduct = state.data.filter(value => value.id === +param.id.replace(':', ''))[0]
      const [input,setInput] = useState(selectedProduct)
      const navigate = useNavigate()
      const onChange = (e) => {
          const {name, value} = e.target
          setInput({...input, [name]: value})
      }

      const save = () => {
        dispatch({type: 'update', payload: {id: input.id, updated: input}})
        navigate(-1)
      }

  return (
    <Container>
        <Container.Title>Update Plant</Container.Title>
        <Container.Wrapper>
            <Container.Label>
                Name of plant
                <Container.Input name='title' onChange={onChange} type='text' value={input.title} />
            </Container.Label>
            <Container.Label>
                Status
                <Container.Input name='status' onChange={onChange} type='text' value={input.status} />
            </Container.Label>
        </Container.Wrapper>
        <Container.Wrapper>
            <Container.Label>
                Price
                <Container.Input name='price' onChange={onChange} type='number' value={input.price} />
            </Container.Label>
            <Container.Label>
                Date Published
                <Container.Input name='publishDate' onChange={onChange} type='text' value={input.publishDate} />
            </Container.Label>
        </Container.Wrapper>
        <Container.Wrapper>
            <Container.Label>
                Discount
                <Container.Input name='discount' onChange={onChange} type='number' value={input.discount} />
            </Container.Label>
            <Container.Label>
                Description
                <Container.Input name='description' onChange={onChange} type='text' value={input.description} />
            </Container.Label>
        </Container.Wrapper>
        {/* <Container.Descs>
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
        </Container.Descs> */}
        {/* <Container.ImageWrapper>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Container.Image>1</Container.Image>
            <Upload {...props}>
            <Button width='160px' icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        </Container.ImageWrapper> */}
        <Button onClick={save} width='131px'>Save Change</Button>
    </Container>
  )
}
