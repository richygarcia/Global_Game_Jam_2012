using UnityEngine;
using System;

var Spawnpoint : GameObject;
	function OnLevelWasLoaded()
{
	SpawnPoint = GameObject.FindWithTag("SpawnPoint");
	transform.position(x,y,z);
}

