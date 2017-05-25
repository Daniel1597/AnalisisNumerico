import java.lang.*;


public class AplDerivacion extends Derivacion {

	public static void main (String args[]) {
		AplDerivacion d = new AplDerivacion ();

		System.out.print ("Valor de x: ");
		d.x = Leer.datoDouble ();

		System.out.print ("Incremento: ");
		d.h = Leer.datoDouble ();
	
		System.out.println ();
		System.out.println ("Valores para la 1a. Derivada\n");
		System.out.println ("La dif. centrada es      : " + d.primeraDerivada ());
		System.out.println ("La dif. hacia adelante es: " + d.primeraDerivadaAdelante());
		System.out.println ("La dif. hacia atras es   : " + d.primeraDerivadaAtras());
		System.out.println ();
		System.out.println ("Valores para la 2a. Derivada\n");
		System.out.println ("La dif. centrada es      : " + d.segundaDerivada ());
	}

	public double f (double x) {
		double f;

		f = -1.0*Math.pow (x,4) - 0.15*Math.pow (x,3)
		    -0.5*Math.pow (x,2) - 0.25*x + 1.2;
		return f;
	}

	
}








