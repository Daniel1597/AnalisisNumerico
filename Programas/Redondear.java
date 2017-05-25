import java.math.*;
public class Redondear
{
       public static double redondeo (double val, int dec) {
              BigDecimal bd=new BigDecimal(
                         Double.toString(val)).setScale(dec,
                                      BigDecimal.ROUND_HALF_UP);
              return bd.doubleValue();
       }
}
