import Vue from 'vue'
import Component from 'vue-class-component'
import FixedHeader from 'vue-fixed-header'
import styled from 'vue-emotion'

const Header = styled(`header`)`
  position: realtive;
  display: flex;
  align-items: center;
  width: 100%;
  height: 360px;
  color: #fff;
  z-index: 1000;
  background: linear-gradient(90deg, ${({ color }) => color}, #2b303b);

  &.fixed {
    height: 40px;
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

const Ribbon = styled(`img`)`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
`
@Component({
  props: {
    color: {
      type: String
    }
  }
})
export class Layout extends Vue {
  isFixed = false

  render() {
    return (
      <main>
        <FixedHeader fixed$sync={this.isFixed} threshold={330}>
          <Header class={{ fixed: this.isFixed }} color={this.color}>
            {!this.isFixed ? (
              <a href="">
                <Ribbon
                  src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"
                  alt="Fork me on GitHub"
                />
              </a>
            ) : null}
            <Logo class={{ fixed: this.isFixed }}>Vue Spinners</Logo>
          </Header>
        </FixedHeader>
        {this.$slots.default}
        <footer>
          <a href={``}>GitHub Repository</a>
        </footer>
      </main>
    )
  }
}
