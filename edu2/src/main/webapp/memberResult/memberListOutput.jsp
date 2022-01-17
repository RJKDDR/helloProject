<%@page import="com.edu.model.MemberVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>memberListOutput.jsp</title>
</head>
<body>
<%
MemberVO vo = (MemberVO) request.getAttribute("member");

if(vo != null){
	out.print("<h3>아이디 : " + vo.getId() + "</h3>");
	out.print("<h3>비밀번호 : " + vo.getPasswd() + "</h3>");
	out.print("<h3>이름 : " + vo.getName() + "</h3>");
	out.print("<h3>이메일 : " + vo.getMail() + "</h3>");
}

List<MemberVO> list =(List<MemberVO>) request.getAttribute("memberList");//속성지정

if(list != null){
	out.print("<table border='1'>");
	out.print("<thead><th>아이디</th><th>비밀번호</th><th>이름</th><th>이메일</th></thead>");
	out.print("<tbody>");
	for(MemberVO member : list){
		out.print("<tr><td><a href='memberSearch.do?id=" +member.getId()+"&job=id'>" + member.getId() + "</a></td><td>"
				+ member.getPasswd() +"</td><td>"
				+ member.getName() + "</td><td>"
				+ member.getMail() + "</td></tr>");
	}
	out.print("</tbody>");
	out.print("</table>");

}
%>

</body>
</html>