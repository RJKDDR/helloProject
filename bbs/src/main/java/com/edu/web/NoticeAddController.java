package com.edu.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.common.HttpUtill;
import com.edu.service.NoticeService;
import com.edu.serviceImpl.NoticeDAO;
import com.edu.vo.NoticeVO;

public class NoticeAddController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String path="noticeList.do";
		
		NoticeVO vo = new NoticeVO();
		vo.setNoticeContent(req.getParameter("content"));
		vo.setNoticeTitle(req.getParameter("title"));
		
		NoticeService service = new NoticeDAO();
		service.insert(vo);
		
		HttpUtill.forward(req, resp, path);

	}

}
