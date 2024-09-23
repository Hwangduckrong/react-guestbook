//import 라이브러리
import React from'react';
import { Link } from 'react-router-dom';
 
 const Error = () => {

 /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
 return (
 <>
    
    <h2>입력하신 비밀번호가 일치하지 않습니다.</h2>
 	<Link to="/deleform+no">다시 입력하기</Link>
 </>
 );
 }
 export default Error;