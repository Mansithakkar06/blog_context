import React, { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom';

export const useFormFields = () => {
    const { id } = useParams("id");
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [image, setImage] = useState("")
    const [success, setSuccess] = useState("")

    const resetForm = () => {
        setTitle("")
        setDescription("")
        setSlug("")
        setImage("")
        setError("")
    }

    return { id, navigate, title, setTitle, slug, setSlug, description, setDescription, error, setError, image, setImage, success, setSuccess,resetForm }
}
