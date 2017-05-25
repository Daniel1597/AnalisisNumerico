import java.io.*;
import java.lang.*;

public class Leer{
	private static InputStreamReader isr = new InputStreamReader(System.in);
	private static BufferedReader br= new BufferedReader(isr);

	public static void setInput (FileInputStream fis) {
		try {
			isr.close ();
			br.close ();
		}
		catch (IOException e)
		{
			System.out.println ("Error de entrada: "+e.getMessage ());
		}
		isr = new InputStreamReader(fis);
		br = new BufferedReader(isr);
	}

	public static String dato() {
		String str="";

		try {
		        str=br.readLine();
//			br.skip(2);
		}
		catch(IOException ioe){
			System.out.println("Error: "+ioe.getMessage());
		}

		return str;
	}

	public static char caracter(){
		char c='\0';

		try{
			c= (char) br.read();

		}
		catch(IOException ioe){
			System.out.println("Error: "+ioe.getMessage());
		}
		return c;
	}

	public static int datoInt(){

		try{
			return Integer.parseInt(dato());
		}
		catch(NumberFormatException e){
			return Integer.MIN_VALUE;
		}

	}

	public static short datoShort(){

		try{
			return Short.parseShort(dato());
		}
		catch(NumberFormatException e){
		         return Short.MIN_VALUE;
		}

	}//metodoShort

	public static long datoLong(){

		try{
			return Long.parseLong(dato());
		}
		catch(NumberFormatException e){
			return Long.MIN_VALUE;
		}
	}

	public static float datoFloat(){

		try{
			return Float.parseFloat(dato());
		}
		catch(NumberFormatException e){
			return Float.MIN_VALUE;
		}

	}

	public static double datoDouble(){

		try{
			return Double.parseDouble(dato());
		}
		catch(NumberFormatException e){
			return Double.MIN_VALUE;
		}

	}

	public static void vector (double v[])
	{
		int i;

		for (i = 0; i < v.length; i++) {
			System.out.print ("v[" + (i+1) + "]: ");
			v[i] = datoDouble ();
		}
	}

	public static void matriz (double m[][])
	{
		int i,j;

		for (i = 0; i < m.length; i++)
			for (j = 0; j < m[0].length; j++) {
				System.out.print ("m[" + (i+1) + "][" + (j+1) + "]: ");
				m[i][j] = datoDouble ();
			}
	}

}//clase
