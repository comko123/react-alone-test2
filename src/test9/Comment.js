const Comment = () => {
return(<>
<ul>
    <><li><h4>1</h4>  <span>삭제하기</span><span>수정하기</span></li></>
    <><li><h4>2</h4> <span>삭제하기</span><span>수정하기</span></li></>
</ul><hr/>
<h4>댓글 작성하기</h4>
<form onSubmit={e=>{e.preventDefault()}}>
<textarea placeholder="댓글을 작성해 보세요." rows="5" cols="80"/> 
<input type = "submit" value = "작성 하기"/></form></>)}
export default Comment