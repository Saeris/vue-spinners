import Vue from 'vue'
import Component from 'vue-class-component'
import styled from 'vue-emotion'

const Main = styled(`main`)`
  .spinners {
    margin-top: ${({ isFixed }) => `${isFixed ? 250 : 0}px`}
  }
`

const Header = styled(`header`)`
  position: realtive;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  color: #fff;
  z-index: 1000;
  background: linear-gradient(90deg, ${({ color }) => color}, #2b303b);

  &.fixed {
    position: fixed;
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 3px 0px,
      rgba(0, 0, 0, 0.12) 0px 1px 7px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -1px;
  }
`

const Logo = styled(`h1`)`
  height: 50px;
  line-height: 50px;
  display: block;
  text-align: center;
  margin: 0px auto;
  font-size: 40px;
  letter-spacing: 5px;
  font-weight: 300;
  text-transform: uppercase;
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  transition: 0.2s ease-in-out;

  &.fixed {
    font-size: 20px;
  }
`

const Footer = styled(`footer`)`
  padding: 30px;
  margin: 15px 0 0 0;
  background: #2b303b;
  text-align: center;

  a {
    text-decoration: none;
    color: #ccc;
  }
`

const Ribbon = styled(`img`)`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
`
@Component({
  props: {
    color: {
      type: String,
      required: true
    }
  }
})
export class Layout extends Vue {
  isFixed = false
  height = 360

  beforeMount() {
    window.addEventListener(`scroll`, this.handleScroll, true)
  }

  beforeDestroy() {
    window.removeEventListener(`scorll`, this.handleScroll, true)
  }

  handleScroll() {
    let height = 360 - window.scrollY
    if (height > 200) {
      this.height = height
      this.isFixed = false
    } else {
      this.height = 40
      this.isFixed = true
    }
  }

  render() {
    return (
      <Main isFixed={this.isFixed}>
        <Header class={{ fixed: this.isFixed }} height={this.height} color={this.color}>
          {this.isFixed
            ? null
            : (
              <a href="https://github.com/Saeris/vue-spinners">
                <Ribbon
                  src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"
                  alt="Fork me on GitHub"
                />
              </a>
            )}
          <Logo class={{ fixed: this.isFixed }}>Vue Spinners</Logo>
        </Header>
        {this.$slots.default}
        <Footer>
          <a href="https://github.com/Saeris/vue-spinners">GitHub Repository</a>
        </Footer>
      </Main>
    )
  }
}
