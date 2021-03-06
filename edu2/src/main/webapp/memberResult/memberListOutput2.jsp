<%@page import="com.edu.model.MemberVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
</head>

<body>
<c:set var="id" value="guest"></c:set>
<c:out value="${id }"></c:out>

<c:if test="${id eq guest }">
<p>Guest입니다.</p>
</c:if>
	<%-- <%
	MemberVO member = (MemberVO) session.getAttribute("login");
	%> => ${login }으로 표현함 --%>
	<h3> 사용자 이름은 : ${login.name }입니다!!</h3>
	
	<%-- <%
	List<MemberVO> list = (List<MemberVO>) request.getAttribute("memberList");//속성지정
	if (list.size() != 0) {
	%> =>${memberList }로 표현함 --%> 
	
	<c:choose>
	<c:when test="${empty memberList }">
	<h3>회원리스트</h3>
	<p>조회된 정보가 없습니다</p>
	</c:when>
	<c:otherwise>
	<h3>회원리스트</h3>
	<table border="1">
		<thead>
				<th>아이디</th>
				<th>이름</th>
				<th>이메일</th>
				<th>비번</th>
		</thead>
		<tbody>
		<!-- for문~ -->
			<c:forEach var="member" items="${memberList }">
			<tr>
				 <td>${member.id }</td>
				 <td>${member.name }</td>
				 <td>${member.mail }</td>
				 <td>${member.passwd }</td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
	</c:otherwise>
	</c:choose>	
	
	
	<%@include file ="home.jsp" %>
</body>

</html>