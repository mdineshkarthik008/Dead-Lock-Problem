// You are using Java
interface operation{
    int operate(int a,int b);
}
class Mainst {
    public static void main(String[] args){
        
        operation s1 = (a,b) -> {return a+b;};
        operation s2 = (a,b) -> {return a*b;};
        Mainst a = new Mainst();
        
        System.out.println(s1.operate(3,4));
        System.out.println(s2.operate(3,4));
    }
}




***which number is divisible by 2
interface EvenChecker{
    boolean check(int num);
}
class Mainst {
    public static void main(String[] args){
        
        EvenChecker a=(num)->num%2==0;
        
        System.out.println(a.check(10));
        System.out.println(a.check(15));
    }
}