#pragma strict
function Update () {
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