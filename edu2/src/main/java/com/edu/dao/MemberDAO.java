package com.edu.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.edu.common.DAO;
import com.edu.model.MemberVO;

public class MemberDAO extends DAO{
	
	//로그인 체크
	public MemberVO loginCheck(String id, String pw) {
		connect();
		String sql = "select * from members where id=? and passwd=?";
		MemberVO member = null;
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			psmt.setString(2, pw);
			
			rs = psmt.executeQuery();
			if(rs.next()) {
				member = new MemberVO();
				member.setId(rs.getString("id"));
				member.setPasswd(rs.getString("passwd"));
				member.setName(rs.getString("name"));
				member.setMail(rs.getString("mail"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return member;
	}
	//리스트
	public List<MemberVO> getMemberList() {
		connect();
		String sql = "select * from members";
		List<MemberVO> memberList = new ArrayList<>();
		
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()){
				MemberVO member = new MemberVO();
				member.setId(rs.getString("id"));
				member.setName(rs.getString("name"));
				member.setMail(rs.getString("mail"));
				member.setPasswd(rs.getString("passwd"));
				
				memberList.add(member);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return memberList;
		
	}
	//단건조회
	public MemberVO getMemeber(String id) {
		connect();
		String sql = "select * from members where id = ?";
		MemberVO searchMember = null;
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1,id);
			rs = psmt.executeQuery();
			if(rs.next()) {
				searchMember = new MemberVO();
				searchMember.setId(rs.getString("id"));
				searchMember.setPasswd(rs.getString("passwd"));
				searchMember.setName(rs.getString("name"));
				searchMember.setMail(rs.getString("mail"));
				
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}return searchMember;
	}
	
	//입력
	public void insertMember(MemberVO vo) {
		connect();
		String sql = "insert into members (id, passwd, name, mail) values(?,?,?,?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getId());
			psmt.setString(2, vo.getPasswd());
			psmt.setString(3, vo.getName());
			psmt.setString(4, vo.getMail());
			
			int r = psmt.executeUpdate();
			System.out.println(r + "건 입력");
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		
	}
	//수정
	public void updateMember(MemberVO vo) {
		connect();
		String sql = "update members set passwd=?, name=?, mail=? where id=?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getPasswd());
			psmt.setString(2, vo.getName());
			psmt.setString(3, vo.getMail());
			psmt.setString(4, vo.getId());
			
			int r = psmt.executeUpdate();
			System.out.println(r + "건 수정");
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		
	}
	//삭제
	public void deleteMemebr(String id) {
		connect();
		String sql = "delete from members where id =?";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			
			int r = psmt.executeUpdate();
			System.out.println(r + "건 삭제");
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
	}
	
	
}
