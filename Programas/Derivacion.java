import java.lang.*;

public abstract class Derivacion {
	double x;
	double h;

	public double segundaDerivada () {
		Redondear r = new Redondear ();
	
		return r.redondeo ((f(x+h) - 2*f(x) + f(x-h)) / (h*h), 2);
	}
	public double primeraDerivada () {
		Redondear r = new Redondear ();
	
		return r.redondeo((f(x+h) - f(x-h)) / (2*h),2);
	}
	public double primeraDerivadaAdelante () {
		Redondear r = new Redondear ();
	
		return r.redondeo((f(x+h) - f(x)) / h,2);
	}

	public double primeraDerivadaAtras () {
		Redondear r = new Redondear ();
	
		return r.redondeo ((f(x) - f(x-h)) / h, 2);
	}

	public abstract double f (double x);
}








