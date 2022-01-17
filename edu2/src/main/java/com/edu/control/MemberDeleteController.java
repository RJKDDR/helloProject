package com.edu.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.dao.MemberDAO;

public class MemberDeleteController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//조회된 아이디를 삭제 -> memberDeleteOutput.jsp
		
		String id = req.getParameter("id");
		
		MemberDAO dao = new MemberDAO();
		dao.deleteMemebr(id);
		
		req.getRequestDispatcher("memberResult/memberDelteOutput.jsp").forward(req, resp);
	}

}
