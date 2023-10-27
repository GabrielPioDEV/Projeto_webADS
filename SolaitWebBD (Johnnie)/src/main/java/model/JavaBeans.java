package model;

public class JavaBeans {
	private String idcadastrar;
	private String pNome;
	private String sNome;
	private String email;
	private String pw;
	private String pw_confirmar;
	
	public JavaBeans() {
		super();
	}
	
	public JavaBeans(String idcadastrar, String pNome, String sNome, String email, String pw, String pw_confirmar) {
		super();
		this.idcadastrar = idcadastrar;
		this.pNome = pNome;
		this.sNome = sNome;
		this.email = email;
		this.pw = pw;
		this.pw_confirmar = pw_confirmar;
	}

	public String getIdcadastrar() {
		return idcadastrar;
	}
	public void setIdcadastrar(String idcadastrar) {
		this.idcadastrar = idcadastrar;
	}
	public String getpNome() {
		return pNome;
	}
	public void setpNome(String pNome) {
		this.pNome = pNome;
	}
	public String getsNome() {
		return sNome;
	}
	public void setsNome(String sNome) {
		this.sNome = sNome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	public String getPw_confirmar() {
		return pw_confirmar;
	}
	public void setPw_confirmar(String pw_confirmar) {
		this.pw_confirmar = pw_confirmar;
	}
	
}
