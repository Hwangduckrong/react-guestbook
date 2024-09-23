import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddList = () => {
    const [personList, setPersonList] = useState([]);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [content, setContent] = useState("");
    //일반변수
    const navigate = useNavigate();
    // 서버에서 데이터 가져오기
    const getPersonList = () => {
        axios({
            method: 'get',
            url: 'http://localhost:9000/api/guests',
            responseType: 'json'
        }).then(response => {
            console.log(response.data);
            setPersonList(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    // 마운트 되었을 때 실행되는 useEffect
    useEffect(() => {
        console.log("마운트 됐어요");
        getPersonList();
    }, []);

    //이름 입력할때

    let handleName = (event) => {
        setName(event.target.value);
    }
    let handlePassword = (event) => {
        setPassword(event.target.value);
    }
    let handleContent = (event) => {
        setContent(event.target.value);
    }

    //저장

    let handleSubmit = (event) => {

        //이벤트를 잡기
        event.preventDefault();

        //데이터 수집

        const guestVo = {
            name: name,
            password: password,
            content: content
        }
        //서버로 데이터를 전송한다(저장)
        axios({
            method: 'post',//리스트 불러오는 거는 get이었음,꼬랑지 안보임               
            url: 'http://localhost:9000/api/guests',
            headers: { "Content-Type": "application/json; charset=utf-8" },  // post put,보낼 때 제이슨으로 보낼꺼야
            data: guestVo,     // put, post,  JSON(자동변환됨)

            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data);
            if (response.data === 1) {
                //리다이렉트
                getPersonList();
                navigate("/addlist");//주소말고 어디로 보낼지 잘 써놔라
            } else
                alert("등록실패")

        }).catch(error => {
            console.log(error);
        });

    }
    return (
        <>


            <form action="/list" method='get' onSubmit={handleSubmit}>
                <table border="1" width="540px">
                    <tbody>
                        <tr>
                            <td>이름</td>
                            <td><input type="text" name="name" defaultValue={name} onChange={handleName} /></td>
                            <td>비밀번호</td>
                            <td><input type="password" name="password" defaultValue={password} onChange={handlePassword} /></td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <textarea cols="72" rows="5" name="content" defaultValue={content} onChange={handleContent}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4"><button type="submit" onClick={handleSubmit}>등록</button></td>
                        </tr>
                    </tbody>
                </table>
                <input type="hidden" name="action" value="insert" />
            </form>
            <br></br>

            {personList.map((guestVo, index) => (
                <div key={index}> {/* key 추가 */}
                    <table border="1" width="540px">
                        <tbody>
                            <tr>
                                <td>{guestVo.no}</td>
                                <td>{guestVo.name}</td>
                                <td>{guestVo.reg_date}</td>

                                <td><Link to={'/deleteform+personVo.personId'+guestVo.no} target="_blank" rel="noreferrer noopener">삭제</Link></td>
                            </tr>
                            <tr>
                                <td colSpan="4">{guestVo.content}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </>
    );
}

export default AddList;
