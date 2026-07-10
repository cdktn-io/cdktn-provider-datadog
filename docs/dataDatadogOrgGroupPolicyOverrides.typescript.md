# `dataDatadogOrgGroupPolicyOverrides` Submodule <a name="`dataDatadogOrgGroupPolicyOverrides` Submodule" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogOrgGroupPolicyOverrides <a name="DataDatadogOrgGroupPolicyOverrides" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/org_group_policy_overrides datadog_org_group_policy_overrides}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer"></a>

```typescript
import { dataDatadogOrgGroupPolicyOverrides } from '@cdktn/provider-datadog'

new dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides(scope: Construct, id: string, config: DataDatadogOrgGroupPolicyOverridesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig">DataDatadogOrgGroupPolicyOverridesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig">DataDatadogOrgGroupPolicyOverridesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOrgUuid">resetOrgUuid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetPolicyId">resetPolicyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetOrgUuid` <a name="resetOrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOrgUuid"></a>

```typescript
public resetOrgUuid(): void
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogOrgGroupPolicyOverrides resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isConstruct"></a>

```typescript
import { dataDatadogOrgGroupPolicyOverrides } from '@cdktn/provider-datadog'

dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformElement"></a>

```typescript
import { dataDatadogOrgGroupPolicyOverrides } from '@cdktn/provider-datadog'

dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformDataSource"></a>

```typescript
import { dataDatadogOrgGroupPolicyOverrides } from '@cdktn/provider-datadog'

dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport"></a>

```typescript
import { dataDatadogOrgGroupPolicyOverrides } from '@cdktn/provider-datadog'

dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogOrgGroupPolicyOverrides resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogOrgGroupPolicyOverrides to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogOrgGroupPolicyOverrides that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/org_group_policy_overrides#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogOrgGroupPolicyOverrides to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList">DataDatadogOrgGroupPolicyOverridesOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupIdInput">orgGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuidInput">orgUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupId">orgGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuid">orgUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.overrides"></a>

```typescript
public readonly overrides: DataDatadogOrgGroupPolicyOverridesOverridesList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList">DataDatadogOrgGroupPolicyOverridesOverridesList</a>

---

##### `orgGroupIdInput`<sup>Optional</sup> <a name="orgGroupIdInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupIdInput"></a>

```typescript
public readonly orgGroupIdInput: string;
```

- *Type:* string

---

##### `orgUuidInput`<sup>Optional</sup> <a name="orgUuidInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuidInput"></a>

```typescript
public readonly orgUuidInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupId"></a>

```typescript
public readonly orgGroupId: string;
```

- *Type:* string

---

##### `orgUuid`<sup>Required</sup> <a name="orgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuid"></a>

```typescript
public readonly orgUuid: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogOrgGroupPolicyOverridesConfig <a name="DataDatadogOrgGroupPolicyOverridesConfig" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.Initializer"></a>

```typescript
import { dataDatadogOrgGroupPolicyOverrides } from '@cdktn/provider-datadog'

const dataDatadogOrgGroupPolicyOverridesConfig: dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgGroupId">orgGroupId</a></code> | <code>string</code> | The UUID of the org group whose overrides to list. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgUuid">orgUuid</a></code> | <code>string</code> | Filter overrides to those for the given organization. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.policyId">policyId</a></code> | <code>string</code> | Filter overrides to those on the given policy. Must be a valid UUID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgGroupId"></a>

```typescript
public readonly orgGroupId: string;
```

- *Type:* string

The UUID of the org group whose overrides to list. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/org_group_policy_overrides#org_group_id DataDatadogOrgGroupPolicyOverrides#org_group_id}

---

##### `orgUuid`<sup>Optional</sup> <a name="orgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgUuid"></a>

```typescript
public readonly orgUuid: string;
```

- *Type:* string

Filter overrides to those for the given organization.

Applied client-side after the List call because the API does not accept an `org_uuid` filter on this endpoint. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/org_group_policy_overrides#org_uuid DataDatadogOrgGroupPolicyOverrides#org_uuid}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Filter overrides to those on the given policy. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/org_group_policy_overrides#policy_id DataDatadogOrgGroupPolicyOverrides#policy_id}

---

### DataDatadogOrgGroupPolicyOverridesOverrides <a name="DataDatadogOrgGroupPolicyOverridesOverrides" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides.Initializer"></a>

```typescript
import { dataDatadogOrgGroupPolicyOverrides } from '@cdktn/provider-datadog'

const dataDatadogOrgGroupPolicyOverridesOverrides: dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogOrgGroupPolicyOverridesOverridesList <a name="DataDatadogOrgGroupPolicyOverridesOverridesList" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer"></a>

```typescript
import { dataDatadogOrgGroupPolicyOverrides } from '@cdktn/provider-datadog'

new dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.get"></a>

```typescript
public get(index: number): DataDatadogOrgGroupPolicyOverridesOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogOrgGroupPolicyOverridesOverridesOutputReference <a name="DataDatadogOrgGroupPolicyOverridesOverridesOutputReference" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer"></a>

```typescript
import { dataDatadogOrgGroupPolicyOverrides } from '@cdktn/provider-datadog'

new dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgGroupId">orgGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgSite">orgSite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgUuid">orgUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides">DataDatadogOrgGroupPolicyOverridesOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgGroupId"></a>

```typescript
public readonly orgGroupId: string;
```

- *Type:* string

---

##### `orgSite`<sup>Required</sup> <a name="orgSite" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgSite"></a>

```typescript
public readonly orgSite: string;
```

- *Type:* string

---

##### `orgUuid`<sup>Required</sup> <a name="orgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgUuid"></a>

```typescript
public readonly orgUuid: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogOrgGroupPolicyOverridesOverrides;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides">DataDatadogOrgGroupPolicyOverridesOverrides</a>

---



