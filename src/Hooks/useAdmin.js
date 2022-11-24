import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState()
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5500/oneuser?email=${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        console.log(data);
                        setIsAdmin(data.isAdmin)
                        setIsAdminLoading(false)
                    }
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading];
};

export default useAdmin;