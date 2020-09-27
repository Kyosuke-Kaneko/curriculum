package src.check;

import src.constants.Constants;
public class Check {

	public static void main(String[] args) {
//		Constants consta = new Constants();
		Pet pt = new Pet(Constants.CHECK_CLASS_JAVA, Constants.CHECK_CLASS_HOGE);
		RobotPet rp = new RobotPet(Constants.CHECK_CLASS_R2D2, Constants.CHECK_CLASS_LUKE);
		String firstName = "Kaneko";
		String lastName = "Kyosuke";
	    System.out.println("printNameメソッド→ " + printName(firstName, lastName));
	    System.out.println();
	    pt.introduce();
	    System.out.println();
	    rp.introduce();

	}
	private static String printName(String firstName, String lastName) {
		String fullName = firstName + lastName;
		return fullName;
	}



}

