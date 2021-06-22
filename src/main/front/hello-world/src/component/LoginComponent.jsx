import React, {Component} from "react";
import {Form, Button, Modal} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignIn.scss";

class LoginComponent extends Component {
  state = {
    email: "",
    password: "",
  };

  loginHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };   ////계산된 속성명 사용

  loginClickHandler = () => {
    const { email, password } = this.state;
    fetch("http://10.58.2.17:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }; 

  render() {
    const { isOpen, close } = this.props;   //아까 버튼에서 props로 가져온것
    console.log(isOpen);
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
         backdrop="static"
         keyboard={false}
       >
         <Modal.Header closeButton>
           <Modal.Title>Modal title</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           I will not close if you click outside me. Don't even try to press
           escape key.
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={close}>
             Close
           </Button>
           <Button variant="primary">Understood</Button>
         </Modal.Footer>
       </Modal>
          
        ) : null}
      </>
    )
  }
}

export default LoginComponent