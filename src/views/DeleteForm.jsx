//import 라이브러리
import React from'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
 const DeleteForm = () => {
    
    const handleDel=(no)=>{
        console.log("삭제버튼 클릭");
        axios({
            method: 'delete', 			// put, post, delete                   
            url: 'http://localhost:9000/api/persons/'+no,
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data);
            console.log(response.data.result);
                if(response.data.result==='success'){
                  
                }else
                alert(response.data.message);
            //리다이렉트(같은 페이지의 리다이렉트는 안된다.)
            //getPersonList();
            //setPersonList(prevList => prevList.filter(personVo => personVo.personId !== no))//콜백함수+filter;
            //filter에 대해 공부해보기
        }).catch(error => {
            console.log(error);
            alert("다시 시도해주세요")
        });
    }
    
 /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
 return (
 <>
   <form action="/guestbook/gbc" method="get">
		<table>
			<tr>
				<td>비밀번호</td>
				<td><input type="text" name="password"/></td>
				<td><button type="submit"onClick=''>삭제</button></td>
			</tr>
		</table>
		<input type="hidden" name="action" value="delete"/>
		<input type="hidden" name="no" value="${param.no}"/> 
	</form>
	
	<br></br>
	<Link to="">메인으로 돌아가기</Link>
 </>
 );
 }
 export default DeleteForm;