package com.edu.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.service.NoticeService;
import com.edu.serviceImpl.NoticeDAO;

public class NoticeDeleteController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		
		NoticeService service = new NoticeDAO();
		service.delete(Integer.parseInt(id));
		resp.sendRedirect("noticeList.do");

	}

}
