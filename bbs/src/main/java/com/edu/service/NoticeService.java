package com.edu.service;

import java.util.List;

import com.edu.vo.NoticeVO;

public interface NoticeService {
	
	public List<NoticeVO> selectList();
	public NoticeVO selectOne(int noticeId);
	public NoticeVO insert(NoticeVO vo);
	public NoticeVO update(NoticeVO vo);
	public int delete(int noticeId);
}
