const blogListEl = document.querySelector("#blogList") 
for(let i=0; i < blogListEl.children.length; i++) {
    const deleteBtnEl = blogListEl.children[i].children[2]
    const id = deleteBtnEl.id.substring(10)
    deleteBtnEl.addEventListener("click", e=> {
        fetch(`/api/blogs/${id}`, {
            method:"DELETE",
        }).then(res=> {
            if(res.ok) {
                location.reload()
            }else {
                alert("an error occured")
            }
        }).catch(err=>{console.log("err")})
    })
    
}


console.log("hello delete")

