#pragma strict
private var no = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
function Update () {
	for(var i : String in no)
	{
		if(Input.GetKeyUp(i)) {
			Debug.Log(i); 
		}
	}
	if(Input.GetMouseButtonUp(0))
	{
		var ray : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hit : RaycastHit;
		Debug.DrawRay (ray.origin, ray.direction * 10, Color.yellow);
		if (Physics.Raycast(ray, hit)) {
			Debug.Log("Clicked");
			var name = hit.rigidbody.name;
			Debug.Log(name);
		}
	}
}