using System;
using static ConsoleApp3.Program;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {
          
            var Weapon1 = Weapon();


            Console.WriteLine(weapon1.BulletTotalCount());

           

            weapon1.WeaponType ="Kalashnikov";
                Weapon1.ChamberSize = 60;
                Weapon1.BulletTotalCount = 600;
                Weapon1.BulletsRemaining >= 0;
                Weapon1.NoAmmo="false";
                Weapon1.Occupation ="Weapon";
                };
        Console.WriteLine(Weapon.Occupation);
             Console.WriteLine(weapon1.BulletTotalCount());
            }

class Weapon
{

    public string Name { get; set}
    public string WeaponType { get; set }
    public int ChamberSize { get; set }
    public int BulletTotalCount { get; set }
    public int BulletsRemaining { get; set}
    public bool NoAmmo { get; set}
    public object Weapon1 { get => Weapon1; set => Weapon1 = value; }


    public string FulName()
    {
        return WeaponType + " " + ChamberSize;

    }
}
public static string ShootBallet( bool IsReloading = false,int Shots = 0,)
    {
        var Shoot = BullettotalCount - 1;
        if (Bullettotal<=0)
                {
                if(bulletsRemaining>=ammo)
                {
                Start ("Reload");
            //bulletsRemaining -=ammo;
            //Here is ammo is always 0(Zero) because of if(ammo<=0). so use
                if(bulletsRemaining>=ammoCapasity)
                {
                bulletsRemaining-=ammoCapasity;
                ammo=ammoCapasity;
                }
        else
        {
        ammo=bulletsRemaining;
            bulletsRemaining=0;
            }
}
}

