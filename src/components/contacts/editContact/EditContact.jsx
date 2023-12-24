import React, { useEffect, useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import userImg from "../../../Images/userImg.png";
import { useDispatch, useSelector } from "react-redux";
import { constactSelector, updateUser } from "../../../redux/ContextReducer";
import styles from "./edit.module.css";
import { CiCamera } from "react-icons/ci";

const EditContact = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [img,setImg] = useState("");

    const {contactId} = useParams();
    const userId = parseInt(contactId);
    const {contacts} = useSelector(constactSelector);

    const edit = contacts.find(user => user.id === userId);
    console.log(edit);

    useEffect(()=>{
        if(!edit){
            console.log("hello");
            navigate('/contacts/list');
        }else{
            setName(edit.name);
            setEmail(edit.email);
            setPhone(edit.phone);
            setImg(edit.image);
        }
    },[edit,userId,navigate]);

    const editUser = (e)=>{
           e.preventDefault();
           if(name===""){
              setName(name);
           }
           if(phone===""){
            setPhone(phone);
           }
           if(email===""){
            setEmail(email);
           }

           const user={
                id: userId,
                name: name,
                phone: phone,
                email: email,
           }
           dispatch(updateUser({data:user}));
           navigate('/contacts/list');
    }

    return(
        <>
           <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-success fw-bold">Edit Contact</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <form onSubmit={editUser}>
                                    <div className="mb-2">
                                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="mb-2">
                                        <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" className="form-control" placeholder="Mobile No."/>
                                    </div>
                                    <div className="mb-2">
                                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-success" value="update"/>
                                        <Link to={"/contacts/list"} className="btn btn-dark ms-2">Cancel</Link>
                                    </div>
                                </form>
                            </div>
                            <div className={`col-md-6 ${styles.outerImg}`}>
                                <div className={styles.camera}>
                                    <CiCamera className="text-white fs-3"/>
                                </div>
                                <img src={img === "" ? userImg : img} alt="userImg" className="contact-img"/>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}
export default EditContact;