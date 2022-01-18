package com.edu.serviceImpl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.edu.common.DAO;
import com.edu.service.BulletinService;
import com.edu.vo.BulletinVO;

public class BulletinDAO extends DAO implements BulletinService{

	@Override
	public List<BulletinVO> selectList() {
		connect();
		String sql = "select * from bbs order by 1";
		List<BulletinVO> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs=psmt.executeQuery();
					while(rs.next()) {
						BulletinVO bulletin = new BulletinVO();
						bulletin.setBbsId(rs.getInt("bbs_id"));
						bulletin.setBbsTitle(rs.getString("bbs_title"));
						bulletin.setBbsContent(rs.getString("bbs_content"));
						bulletin.setBbsWriter(rs.getString("bbs_writer"));
						bulletin.setBbsImage(rs.getString("bbs_Image"));
						bulletin.setBbsCreateDate(rs.getString("bbs_create_date"));
						bulletin.setBbsHit(rs.getInt("bbs_hit"));
						list.add(bulletin);
						
					}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public BulletinVO selectOne(int bbsId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BulletinVO insert(BulletinVO vo) {
		connect();
		String sql1 = "select bbs_id_seq.nextval from dual";
		String sql2 = "insert into bbs(bbs_id, bbs_title, bbs_content, bbs_writer, bbs_image, bbs_create_date, bbs_hit) values(?,?,?,?,?,sysdate,0)";
		try {
			psmt = conn.prepareStatement(sql1);
			rs = psmt.executeQuery();
			int seq = 0;
			if(rs.next()) {
				seq = rs.getInt(1);
			}
			psmt = conn.prepareStatement(sql2);
			psmt.setInt(1, seq);
			psmt.setString(2, vo.getBbsTitle());
			psmt.setString(3, vo.getBbsContent());
			psmt.setString(4, vo.getBbsWriter());
			psmt.setString(5, vo.getBbsImage());
			int r = psmt.executeUpdate();
			System.out.println(r + "입력");
			
			//입력값에 bbs_id 값만 추가해서 반환
			vo.setBbsId(seq);
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		
		
		return vo;
	}

	@Override
	public BulletinVO update(BulletinVO vo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int delete(int bbsId) {
		// TODO Auto-generated method stub
		return 0;
	}
	
	
}