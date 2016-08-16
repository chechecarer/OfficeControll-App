<%
	//response.getWriter().write("[{'firstName':'1firestname','lastName':'1lastname','onoff':0},{'firstName':'2firestname','lastName':'2lastname','onoff':0},{'firstName':'3firestname','lastName':'3lastname','onoff':1},{'firstName':'4firestname','lastName':'4lastname','onoff':1},{'firstName':'firestname','lastName':'lastname','onoff':1}]");
	String p = request.getParameter("p");
	System.out.println("p="+p);
	if(p.equals("power"))
	response.getWriter().write("[{office1:1,office2:1,office3:0,office4:1,office5:0}]");
	if(p.equals("curtain"))
	response.getWriter().write("[{office1:0,office2:1,office3:0,office4:1,office5:0}]");
	if(p.equals("light"))
	response.getWriter().write("[{office1:1,office2:0,office3:0,office4:1,office5:0}]");
%>