<%@page import="com.edu.model.CommentVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ex1.jsp</title>
</head>
<body>
<c:set var="name" value="namjun"></c:set>
<c:out value="${name }"></c:out>

<%
CommentVO comment = new CommentVO();
comment.setId(10);//id 필드 지정
comment.setName("김남준"); //name
comment.setContent("샘플"); //content
request.setAttribute("vo", comment);
%>
<p>${vo }</p>
<c:set var="id" value="${vo.id }"></c:set>
<c:out value="${id }"></c:out>

<c:set var="name" value="${vo.name }"></c:set>
<c:out value="${name }"></c:out>

<c:set var="content" value="${vo.content }"></c:set>
<c:out value="${content }"></c:out>

<c:set var="sname">Min</c:set>
<p><c:out value="${sname }"></c:out></p>

<c:set var="num" value="${80 }"></c:set>
<p><c:out value="${num }"></c:out></p>

<c:if test="${num>60 }">
<p>합격</p>
</c:if>

<c:choose>
<c:when test="${num>=90 }">A</c:when>
<c:when test="${num>=80 }">B</c:when>
<c:when test="${num>=70 }">C</c:when>
<c:otherwise>D등급</c:otherwise>
</c:choose>

 

</body>
</html>


