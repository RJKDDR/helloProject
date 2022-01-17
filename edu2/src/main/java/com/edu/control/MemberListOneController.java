package com.edu.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.dao.MemberDAO;
import com.edu.model.MemberVO;

public class MemberListOneController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		
		MemberDAO dao = new MemberDAO();
		MemberVO vo = dao.getMemeber(id);
		req.setAttribute("member", vo);
		req.getRequestDispatcher("").forward(req, resp);
		

	}

}
