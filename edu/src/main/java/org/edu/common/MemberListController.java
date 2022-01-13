package org.edu.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MemberListController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws Exception {
		
		String method = req.getMethod();
		String result = "";
		if(method.equals("GET")) {
			result = doGet();
		}else if(method.equals("POST")) {
			result = doPost();
		}
		//[{"id":1,"name":"Kim"},{"id":2,"name":"min"},{"id":3, "name":"park"}]
		String id = req.getParameter("id");
		String name = req.getParameter("name");
		String score = req.getParameter("score");
		
		resp.setContentType("text/json;charset=utf-8");
		String json = "[{\"id\":1,\"name\":\"Kim\"},{\"id\":2,\"name\":\"min\"},{\"id\":3, \"name\":\"park\"},{\"id\":" + id + ",\"name\":\"" + name + "\"},{\"id\":5,\"name\":\""+result+"\"}]";
		resp.getWriter().print(json);
	}
	public String doGet() {
		return "Get방식 호출";
	}
	public String doPost() {
		return "Post방식 호출";
	}

}
