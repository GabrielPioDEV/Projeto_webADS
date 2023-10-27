package model;

import java.sql.Connection;
import java.sql.DriverManager;

public class DAO {
	// modulo de conexão
	//Parametros de conexão
	private String driver = "com.mysql.cj.jdbc.Driver"; //link com o mysql connector, driver .jar da pasta WEB-INF/lib/mysql-connector-j-8.0.33.jar
	private String url = "jdbc:mysql://localhost:3306/solaitbd?useTimezone=true&serverTimezone=UTC"; //conexão com banco de dados e data/hora
	
	private String user = "root"; //login do root
	private String password = "Dacy2906"; //senha do root
	//metodo de conexão
	private Connection conectar() {
		Connection con = null; //objeto de valor nulo
		try {
			Class.forName(driver); //busca o driver para o banco de dados (mysql-connector)
			con = DriverManager.getConnection(url, user, password); //conexão e gerenciamento do driver. url, user, password são strings declaradas acima
			return con;
		} catch (Exception e) {
			System.out.println("Erro:" + e); //mostrar erro
			return null;
		}
	}
}
