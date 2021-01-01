  
<template>
  <div class="GLTFCamera">
    <div id="scene-container" ref="sceneContainer"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import Stats from 'stats.js'

let container;
let scene;
let camera;
// let controls;
let renderer;
// let stats;
let loader;



export default {
  name: 'GLTFCamera',
  data () {
    return {
      container: null,
      scene: null,
      camera: null,
      controls: null,
      renderer: null,
      stats: null
    }
  },
  methods: {
    init () {
      // set container
      container = this.$refs.sceneContainer
      // add stats
      // stats = new Stats()
      // container.appendChild(stats.dom)
      // add camera
      const fov = 60 // Field of view
      const aspect = container.clientWidth / container.clientHeight
      const near = 0.1 // the near clipping plane
      const far = 100 // the far clipping plane
      camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
      camera.position.set(0, 0, 30)
      // create scene
      scene = new THREE.Scene()
    //   scene.background = new THREE.Color('skyblue')
      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xffffff, // bright sky color
        0x222222, // dim ground color
        1 // intensity
      )
      const mainLight = new THREE.DirectionalLight(0xffffff, 4.0)
      mainLight.position.set(10, 10, 10)
      scene.add(ambientLight, mainLight)
      // add controls
      // controls = new OrbitControls(camera, container)
      // this.controls = controls
      // create renderer
      renderer =  new THREE.WebGLRenderer({ antialias: true, alpha:true })
      renderer.setSize(container.clientWidth, container.clientHeight)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.gammaFactor = 2.2
      renderer.outputEncoding = THREE.sRGBEncoding
      renderer.physicallyCorrectLights = true
      container.appendChild(renderer.domElement)
      // set aspect ratio to match the new browser window aspect ratio
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
      loader = new GLTFLoader()
      loader.load(
        '/assets/Models/model.glb',
        gltf => {
          scene.add(gltf.scene)
        },
        undefined,
        undefined
      )
      renderer.setAnimationLoop(() => {
        this.render()
      })
    },
    render () {
      renderer.render(scene, camera)
      // stats.update()
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.GLTFCamera {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  width: 30vw;
  height: 60vh;
}
#scene-container {
  overflow: hidden;
  height: 60vh;
  width: 30vw;
}
</style>