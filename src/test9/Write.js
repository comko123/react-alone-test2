const Write = () => {
    return(<>
    <h2>게시글 작성하기</h2>
    <form onSubmit={e=>{e.preventDefault()}}>
    <input type = "text" placeholder="제목" minLength="1"/>
    <br/><br/>
    <textarea placeholder="내용" rows="15" cols="60" />
    <br/><br/>
    <input type="submit" value="작성하기"/>
    </form>
    </>)}
    
export default Write