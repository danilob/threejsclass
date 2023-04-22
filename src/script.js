import * as THREE from 'three'

const eulerToRad = (angle) => Math.PI * angle/180

// Scene
const scene = new THREE.Scene()

//Red cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
mesh.rotation.reorder('YXZ')
mesh.rotation.x = eulerToRad(90)
mesh.rotation.y = eulerToRad(45)
//mesh.scale.set(2,4,1)
//mesh.position.set(1,2,2);
//mesh.rotation.order('XYZ')
//mesh.rotation.x = eulerToRad(90)
const mesh1 = new THREE.Mesh(
	new THREE.BoxGeometry(1,1,1),
	new THREE.MeshBasicMaterial({color: 0x00ff00})
)
mesh1.position.x = 4

const mesh2 = new THREE.Mesh(
	new THREE.BoxGeometry(1,1,1),
	new THREE.MeshBasicMaterial({color: 0x0000ff})
)
mesh2.position.x = -4

const group = new THREE.Group()
group.add(mesh)
group.add(mesh1)
group.add(mesh2)
group.scale.set(1,4,1)
group.rotation.z = eulerToRad(90)

scene.add(group)

const sizes = {
	width: 800,
	height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 1, 1000)
camera.position.z = 10
scene.add(camera)

//Render
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)