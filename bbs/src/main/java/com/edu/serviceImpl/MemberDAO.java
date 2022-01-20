package com.edu.serviceImpl;

import java.sql.SQLException;
import java.util.List;

import com.edu.common.DAO;
import com.edu.service.MemberService;
import com.edu.vo.MemberVO;

public class MemberDAO extends DAO implements MemberService {

	@Override
	public boolean memberInsert(MemberVO vo) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean memberUpdate(MemberVO vo) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<MemberVO> memberList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MemberVO login(String id, String pw) {
		String sql="select * from members where id=? and passwd=?";
		connect();
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
		}
		return member;
	}

}
