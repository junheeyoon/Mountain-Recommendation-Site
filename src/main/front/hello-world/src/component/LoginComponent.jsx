import React, {Component} from "react";
import {Form, Button, Modal, InputGroup, FormControl} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
const width = {
  width: "100%",
};

class LoginComponent extends Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    const { isOpen, close } = this.props;   //아까 버튼에서 props로 가져온것
    return (
        
      <>
        {isOpen ? (  
         
         ////만약 isopen(this.state.isModalOpen)이 true일때 코드를 실행 false면  null
        /// <div onClick={close}> 로그인창 말고 회색 바탕을 누를시 모달이 꺼지게 만듬
	      ///<span className="close" onClick={close}>&times;</span> x버튼 누를시 꺼짐
        ////<div className="modalContents" onClick={isOpen}> 로그인 화면은 버튼 클릭해서 들어오면
         /// true인 상태로 있어서 화면이 안꺼진다.
         
         <Modal
         show={isOpen}
         onHide={close}
         aria-labelledby="contained-modal-title-vcenter"
         centered
       >
         <Modal.Header>
           <Modal.Title>Sign In</Modal.Title>
           <Button type="button" onClick={close} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
         </Modal.Header>
         <Modal.Body>
         <img
                            src={logo}
                            width="100%"
                            height="100"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                            class="center"
          />
          <InputGroup className="mb-3">
            <FormControl
              placeholder="아이디"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">  
            <FormControl
              placeholder="비밀번호"
              aria-label="Password"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
           
           <InputGroup className="mb-3">  
            <Button style={width} variant="dark" onClick={close}>
              로그인
            </Button>
          </InputGroup>
          <InputGroup className="mb-3">  
            <Button style={width} variant="warning" onClick={close}>
              카카오 계정으로 신규가입
            </Button>
          </InputGroup>
          <InputGroup className="mb-3">  
            <Button style={width} variant="primary" onClick={close}>
              페이스북 계정으로 신규가입
            </Button>
          </InputGroup>
           
           <p>아직 회원이 아니신가요?</p>
         </Modal.Body>
         
         
       </Modal>
          
        ) : null}
      </>
    )
  }
}

export default LoginComponent