package com.edu.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.dao.MemberDAO;
import com.edu.model.MemberVO;

public class MemberListController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		MemberDAO dao = new MemberDAO();
		
		List<MemberVO> list = dao.getMemberList();
		req.setAttribute("memberList", list);
		
		
		//resp.sendRedirect("member/memberList.jsp");
		req.getRequestDispatcher("memberResult/memberListOutput2.jsp").forward(req, resp);
	}

}
